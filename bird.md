###遗留问题

1. game处理的消息最好能用一个cmd, 然后用action来区分消息

####改进

1. log 颜色
2. config独立做版本管理 从代码中分离出去，数值配置excel，生成配置
3. 文本 整理到配置中
4. 代码中的常量 写入配置当中
5. 数值公式放入数值表中

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

4. 主播号

    game.%d.live.telecast.user

5. redis 关键字

    fake.bonus.count  抽奖 奖金鸟个数 包括奖金鸟和boss  

    area_key = 'area:%d:%d' % (gid, area_id)  
    hgetall area:2:1001
    1) "full_table_info"
    2) "[1479283546,30,48,25,36,44,7,46,50,23,47,40,39,12]"
    3) "1"
    4) "1001"

    recharge_buff
    [[奖励组编号，[id: count]],[]]

6. ==

    bird.301  红龙
