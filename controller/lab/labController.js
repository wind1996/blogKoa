var lab = {}

lab.render = async function (ctx, next) {
    await ctx.render('page/lab/lab', {
        title: '博客-实验室',
        list: [
            {
                href: 'http://demo.kongdepeng.com.cn/SmithChart/',
                title: 'SmithChart',
                content: '使用HTML，Canvas制作的史密斯原图工具',
                bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0'
            }, {
                href: 'http://demo.kongdepeng.com.cn/CalcPi/',
                title: '蒙特卡洛方法求解圆周率',
                content: '蒙特卡洛方法求解圆周率Canva',
                bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0'
            }, {
                href: 'http://demo.kongdepeng.com.cn/snake/',
                title: '贪食蛇',
                content: 'jsDom制作贪食蛇游戏',
                bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0'
            }, {
                href: 'http://demo.kongdepeng.com.cn/Lottery/',
                title: '转盘抽奖',
                content: '转盘抽奖Canvas，js原生转盘抽奖',
                bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0'
            }, {
                href: 'http://share.kongdepeng.com.cn/',
                title: '班级网',
                content: 'Vue laravel 前后端分离，班级网',
                bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0'
            }
        ],
        pagination: {
            size: 10,
            sumPage: 10,
            currentPage: 6,
            baseUrl: '/lab?page='
        }
    })
};


lab.categoryRender = async function (ctx, next) {
    await ctx.render('page/lab/labStatistics', {
        title: '博客-实验室归档',
        list: [
            {
                href: 'http://demo.kongdepeng.com.cn/SmithChart',
                title: 'SmithChart',
                content: '使用HTML，Canvas制作的史密斯原图工具',
                bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0'
            }, {
                href: 'http://demo.kongdepeng.com.cn/CalcPi',
                title: '蒙特卡洛方法求解圆周率',
                content: '蒙特卡洛方法求解圆周率Canva',
                bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0'
            }, {
                href: 'http://demo.kongdepeng.com.cn/snake',
                title: '贪食蛇',
                content: 'jsDom制作贪食蛇游戏',
                bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0'
            }, {
                href: 'http://demo.kongdepeng.com.cn/Lottery',
                title: '转盘抽奖',
                content: '转盘抽奖Canvas，js原生转盘抽奖',
                bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0'
            }, {
                href: 'http://share.kongdepeng.com.cn',
                title: '班级网',
                content: 'Vue laravel 前后端分离，班级网',
                bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0'
            }
        ],
        pagination: {
            size: 10,
            sumPage: 10,
            currentPage: 6,
            baseUrl: '/lab?page='
        }
    })
};

module.exports = lab