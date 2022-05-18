import {Card, Table} from "antd";

// 文章列表组件
const ArticleList = () => {

  const columns = [
    {
      title: '封面',
      dataIndex: 'cover',
      render: cover => {
        return <img src={cover || 'img404'} height={150} alt=""/>
      }
    },
    {
      title: '标题',
      dataIndex: 'title',
      width: 220
    },
    {
      title: '状态',
      dataIndex: 'status'
    },
    {
      title: '发布时间',
      dataIndex: 'pubdate'
    },
    {
      title: '阅读数',
      dataIndex: 'read_count'
    },
    {
      title: '喜欢数',
      dataIndex: 'like_count'
    },
    {
      title: '操作'
    }
  ]


  const data = [
    {
      id: '1',
      comment_count: 0,
      cover: {
        images: ['']
      },
      like_count: 0,
      pubdate: '发布时间',
      read_count: 2,
      status: 2,
      title: '哈哈哈哈嘻嘻嘻嘿嘿嘿'
    }
  ]

  return (
    <Card title={`根据筛选条件共查询到${0}条结果`} style={{marginTop: '20px'}}>
      <Table rowKey={'id'} columns={columns} dataSource={data}>

      </Table>
    </Card>
  )
}

export default ArticleList