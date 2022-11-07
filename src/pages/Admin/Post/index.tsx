import { EditOutlined, FlagOutlined } from "@ant-design/icons";
import { Divider, Radio, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { removeShowNews, showNews } from "../../../api/home";
import vi from 'date-fns/locale/vi'
import { add, addMinutes, format } from "date-fns";
import Countdown from "react-countdown";
import { id } from "date-fns/locale";

const Post: React.FC = () => {
  const [news, setNews] = useState<any>([]);

  useEffect(() => {
    getNews();
  }, []);
  const getNews = async () => {
    const { data } = await showNews();
    setNews(data);
    console.log(data);
    
  };
  const startDay = new Date()
  // const endDay = news.job?.[0].end_job_time;  

  const onRemove: SubmitHandler<any> = async (id: any) => {
    const confim = window.confirm("bạn có muốn xóa không");
    if (confim) {
      await removeShowNews(id).then(() => getNews());
    }
  };

  const columns: ColumnsType<any> = [
    {
      title: "Logo",
      dataIndex: `logo`,
      render: (theImageURL) => (
        <img alt={theImageURL} src={theImageURL} width={100} />
      ),
    },
    {
      title: "Tiêu Đề",
      dataIndex: ["title"],
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Vị trí làm việc",
      dataIndex: ["getprofession", "name"],
    },
    {
      title: "Hình thức làm việc",
      dataIndex: ["get_time_work", "name"],
    },
    {
      title: "Trạng Thái",
      dataIndex: "nháp",
    },
    {
      title: "Số lượng hồ sơ đã nhân",
      dataIndex: 20,
    },
    {
      title: "Thời gian còn lại",
      dataIndex: 20,
    },
    {
      title: "Thời gian đăng",
      dataIndex: 20,
    },
    {
      title: "Action",
      dataIndex: "id",
      render: (id: string) => (
        <div>
          <a
            href={`/admin/post/editnews/${id}`}
            className="p-2 circle text-black bg-light-danger d-inline-flex align-items-center justify-content-center ml-1"
          >
            <EditOutlined />
          </a>
          <a
            className="p-2 circle text-danger bg-light-danger d-inline-flex align-items-center justify-content-center ml-1"
            onClick={() => onRemove(id)}
          >
            <i className="lni lni-trash-can" />
          </a>
        </div>
      ),
    },
    {
      // dataIndex: "id",
      // render: (id: string) => (
      // ),
      // render: () => (
      //    <Space size="middle">
      //       <div className="dash-action">
      //          <a href="javascript:void(0);" className="p-2 circle text-info bg-light-info d-inline-flex align-items-center justify-content-center mr-1"><FlagOutlined /></a>
      //          <a href="javascript:void(0);" className="p-2 circle text-info bg-light-info d-inline-flex align-items-center justify-content-center mr-1"><i className="lni lni-eye" /></a>
      //          <a href="javascript:void(0);" className="p-2 circle text-black bg-light-danger d-inline-flex align-items-center justify-content-center ml-1"><EditOutlined /></a>
      //       </div>
      //    </Space>
      // ),
    },
  ];
  // console.log(news.getprofession.name);

  return (
    <div>
      <Table columns={columns} dataSource={news.job}></Table>
    </div>
  );
};


export default Post;
