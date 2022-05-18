import {
  Card,
  Form,
  Button,
  Radio,
  DatePicker,
  Select,
} from "antd";
import MyBreadcrumb from "@/components/Breadcrumb";
import ArticleList from "@/components/ArticleList";


const {RangePicker} = DatePicker

const Article = () => {
  // 表单提交时
  const onFinish = values => {
    console.log(values)
  }
  return (
    <>
      <Card title={<MyBreadcrumb/>}>
        <Form
          size={'large'}
          wrapperCol={{
            span: 6,
          }}
          layout="horizontal"
          initialValues={{
            status: -1
          }}
          style={{marginBottom: '20px'}}
          onFinish={onFinish}
        >
          <Form.Item label={"状态"} name={"status"}>
            <Radio.Group>
              <Radio value={-1}>全部</Radio>
              <Radio value={0}>草稿</Radio>
              <Radio value={1}>待审核</Radio>
              <Radio value={2}>审核通过</Radio>
              <Radio value={3}>审核失败</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="分类" name={'category'} wrapperCol={{span: 2}}>
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="日期" name={'date'}>
            <RangePicker/>
          </Form.Item>
          <Button type={'primary'} htmlType={'submit'}>查询</Button>
        </Form>
      </Card>
      <ArticleList/>
    </>
  )
}

export default Article