import {Breadcrumb} from "antd";
import {Link} from "react-router-dom";

const MyBreadcrumb = () => {
  return (
    <Breadcrumb separator={"/"}>
      <Breadcrumb.Item>
        <Link to={"/"}>首页</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to={"/"}>内容管理</Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default MyBreadcrumb