const path=require('path')
const webpack =require('webpack')
const htmlWebpackPlugin=require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//配置文件，通过node中模块。向外暴露一个配置对象
module.exports={
    //入口
    entry:path.join(__dirname,'./src/main.js'),
    //出口
    output:{
        path:path.join(__dirname,'/dist'),
        filename:'bundle.js'  //这是输出文件名称

    },
    devServer:{//配置devserver参数的第二种方式
        open:true,//自动打开浏览器
        port:3000,//设置端口
        contentBase:'src',//设置跟目录
        hot:true //启用热更新第一步

    },
    plugins:[ //配置插件的节点
       new webpack.HotModuleReplacementPlugin() ,//new一个热更新的对象
       new VueLoaderPlugin(),
       new htmlWebpackPlugin({//创建一个生成HTML页面的插件
        
        template:path.join(__dirname,'./src/index.html'),
        filename:'index.html'  //指定生成的页面名称

       })

    ],
    module:{//这个节点，用于所用的带三方模块加载器
        rules:[//所用第三方模块的匹配规则
           {test:/\.css$/,use:['style-loader','css-loader']},//配置处理。css文件的第三方loader规则
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=16080&name=[hash:8]-[name].[ext]'},//传参小于limit会被编码
           {test:/\.(ttf|eot|woff|woff2|svg)$/,use:'url-loader'},//处理字体
         {test:/\.js$/,use:{
            loader:'babel-loader'
        },exclude:/node_modules/},
        {test:/\.vue$/,use:'vue-loader'}


        ]

    },
    resolve:{
        alias:{
         //   " Vue$":"vue/dist/vue.js"
        }
    }


}