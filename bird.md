###遗留问题

1. game处理的消息最好能用一个cmd, 然后用action来区分消息

###框架说明

1. game.jsom 
mode: 1 线上 2 仿真 3 内网 
对应 item.py 里的 Global.run_mode 
run_mode数组内 对应进程id

2. redis

    make-redis.py 脚本模版
    start-master-redis.sh 生成启动脚本并启动主redis
    start-slare-redis.sh 生成启动脚本并启动从redis
    cron-redis.py 从备份
    misc.cron 从备份进程

3. builder.201.com
 cd: 10  十个增量地图 计算一次鸟出现比例 一个cd大约30s
