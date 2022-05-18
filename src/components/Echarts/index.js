import { useEffect, useRef } from "react"
import * as echarts from 'echarts'

const Echarts = ({title, xData, yData, style}) => {
  // 获取DOM
  const myRef = useRef(null)
  const initEcharts = () => {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(myRef.current)
    // 绘制图表
    myChart.setOption({
      title: {
        text: title
      },
      tooltip: {},
      xAxis: {
        data: xData
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: yData
        }
      ]
    });
  }
  useEffect(() => {
    initEcharts()
  }, [])
  return (
    <div ref={myRef} style={{width: 500, height: 400}}></div>
  )
}

export default Echarts