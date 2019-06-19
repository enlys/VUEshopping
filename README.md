这是一个Vue项目

开源协议的区别


1.git add .
2.git commit -m "提交信息"
3.git push


改造tabber为 router-link

点击 router-link，展示对应路由组件

制作首页数据

首页新闻页面路由链接

实现新闻资讯列表点击跳转

创建一个单独的comment组件

点击加载更多评论

实现发表评论

图片分享

顶部滑动条 

需要初始化滑动条

不启用严格模式

babel-plugin-transform-remove-strict-mode
修改mui-tab-item样式让tabber正常显示

图片详情

商品列表的样式

手机端调试
确保链接同一WIFI

打开package.json文件，在Dev脚本中，添加--host指令，把当前电脑的WiFi ip地址为设置为--host的设定值

cmd中运行ipconfig 查看无线网的IP地址