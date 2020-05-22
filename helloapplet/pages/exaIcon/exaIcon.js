Page({
  data: {
    type: ['success', 'info', 'warn', 'warn', 'waiting', 'circle', 'success_no_circle', 'download', 'cancel', 'search'],
    title: ['成功', '提示', '普通警告', '严重警告', '等待', '未选择', '已选择', '下载', '停止或关闭', '搜索'],
    describe: [
      '用于表示操作顺利完成', 
      '用于表示信息提示；也常用于缺乏条件的操作拦截，提示用户所需信息', 
      '用于表示操作后将引起一定后果的情况；也用于表示由于系统原因而造成的负向结果',
      '用于表示由于用户原因造成的负向结果；也用于表示操作后将引起不可严重的挽回的后果的情况',
      '用于表示等待，告知用户结果需等待',
      '用于多选控件中，表示该项目可被选择，但还未选择',
      '用于单选控件中，表示已选择该项目',
      '用于表示可下载',
      '用于在表单中，表示关闭或停止',
      '用于搜索控件中，表示可搜索'
    ],
    icons: [
      {
        type: "success",
        title: "成功",
        describe: "用于表示操作顺利完成"
      },
      {
        type: "info",
        title: "提示",
        describe: "用于表示信息提示；也常用于缺乏条件的操作拦截，提示用户所需信息"
      },
      {
        type: "warn",
        title: "普通警告",
        describe: "用于表示操作后将引起一定后果的情况；也用于表示由于系统原因而造成的负向结果"
      },
      {
        type: "warn",
        title: "严重警告",
        describe: "用于表示由于用户原因造成的负向结果；也用于表示操作后将引起不可严重的挽回的后果的情况"
      },
      {
        type: "waiting",
        title: "等待",
        describe: "用于表示等待，告知用户结果需等待"
      },
      {
        type: "circle",
        title: "未选择",
        describe: "用于多选控件中，表示该项目可被选择，但还未选择"
      },
      {
        type: "success_no_circle",
        title: "已选择",
        describe: "用于单选控件中，表示已选择该项目"
      },
      {
        type: "download",
        title: "下载",
        describe: "用于表示可下载"
      },
      {
        type: "cancel",
        title: "停止或关闭",
        describe: "用于在表单中，表示关闭或停止"
      },
      {
        type: "search",
        title: "搜索",
        describe: "用于搜索控件中，表示可搜索"
      }
    ]
  }
})