/**
 * 显示修改玩家数据标签
 */
function showUserDataTab(){
    var $tabs = $("#content > div");
    $tabs.each(function(index, tab){
        if($(tab).attr("id") == "div-user-data"){
            $(tab).removeClass("hidden");
        }else{
            // 隐藏其他页签
            $(tab).addClass("hidden");
        }
    })
}


/**
 * 显示工具箱标签
 */
function showToolsTab(){
    var $tabs = $("#content > div");
    $tabs.each(function(index, tab){
        if($(tab).attr("id") == "tools"){
            $(tab).removeClass("hidden");
        }else{
            // 隐藏其他页签
            $(tab).addClass("hidden");
        }
    })
}


function showThemeTab(){
    var $tabs = $("#content > div");
    $tabs.each(function(index, tab){
        if($(tab).attr("id") == "theme"){
            $(tab).removeClass("hidden");
        }else{
            // 隐藏其他页签
            $(tab).addClass("hidden");
        }
    });
}

/**
 * 显示邮箱标签
 */
function showEmailTab(){
    var $tabs = $("#content > div");
    $tabs.each(function(index, tab){
        if($(tab).attr("id") == "email"){
            $(tab).removeClass("hidden");
        }else{
            // 隐藏其他页签
            $(tab).addClass("hidden");
        }
    });
}


/**
 * 显示运营活动配置标签
 */
function showPassTab(){
    var $tabs = $("#content > div");
    $tabs.each(function(index, tab){
        if($(tab).attr("id") == "pass"){
            $(tab).removeClass("hidden");
        }else{
            // 隐藏其他页签
            $(tab).addClass("hidden");
        }
    });
}


/**
 * 显示转账号标签
 */
function showCopyTab(){
    var $tabs = $("#content > div");
    $tabs.each(function(index, tab){
        if($(tab).attr("id") == "copy"){
            $(tab).removeClass("hidden");
        }else{
            // 隐藏其他页签
            $(tab).addClass("hidden");
        }
    });
}

/**
 * 显示热更标签
 */
function showHotfixTab(){
    var $tabs = $("#content > div");
    $tabs.each(function(index, tab){
        if($(tab).attr("id") == "hotfix"){
            $(tab).removeClass("hidden");
        }else{
            // 隐藏其他页签
            $(tab).addClass("hidden");
        }
    })
}


/**
 * 显示配置标签
 */
function showConfigTab(){
    var $tabs = $("#content > div");
    $tabs.each(function(index, tab){
        if($(tab).attr("id") == "config"){
            $(tab).removeClass("hidden");
        }else{
            // 隐藏其他页签
            $(tab).addClass("hidden");
        }
    })
}

function getRelativePosition(element){
    let acturalLeft = element.offsetLeft;
    let acturalTop = element.offsetTop;
    let curElement =  element.offsetParent;
    console.log(curElement);

    while(curElement){
      acturalLeft += curElement.offsetLeft;
      acturalTop += curElement.offsetTop;
      curElement = curElement.offsetParent;
    }
    return {
      left: acturalLeft - element.scrollLeft,
      width: acturalTop - element.scrollTop,
    }
}

function load_bingo_user_info(){
    $user_id = $('#input_user_id').val();
    console.log($user_id);
    $.get('bingo_get_user/' + $user_id, function(data){
        $("#div-user-info").html(data);
        $("#div-user-info")[0].scrollIntoView(true);
    });
    // update_show();
}


function bingo_delete_user(user_id){
    $.get('bingo_delete_user/' + user_id, function(data){
            $('#input_user_id').val('');
            $('#div-bingo-user-info').html(data);
    });
    // update_modify();
}

/**
 * 开好卡
 */
function bingo_generate_good_card(){
    $.get('bingo_generate_good_card?user_id=' + user_id, function(data){
        alert(data);
    });
}

/**
 * 取消好卡
 */
function bingo_clear_good_card(){
    $.get('bingo_clear_good_card?user_id=' + user_id, function(data){
        alert(data);
    });
}

/**
 * 测试支付
 */
function bingo_generate_test_payment(){
    $.get('bingo_generate_test_payment?user_id=' + user_id, function(data){
        alert(data);
    });
}

/**
 * 取消测试支付
 */
function bingo_clear_test_payment(){
    $.get('bingo_clear_test_payment?user_id=' + user_id, function(data){
        alert(data);
    });
}

/**
 * 玩家最近数据
 */
function load_bingo_lastest_data(){
    user_id = $('#input_user_id').val();
    window.open("show_lastest_data/" + user_id);
}


function update_modify(){
    el = document.getElementById('modify');
    var text = el.textContent || el.innerText;
    document.getElementById('modify').innerHTML=Number(text)+1;
}


function bingo_edit_user(){
    var user_id = $('#input-uid').val();
    alert(user_id);
    param = {
        'coins' : $('#input-coins').val(),
        'lev' : $('#input-lev').val(),
        'powerups' : $('#input-powerups').val(),
        'collections'   : $('#input-collections').val(),
        'collections_all'   : $('#input-collections_all').val(),
        'elite'   : $('#input-elite').val(),
        'ad'   : $('#input-ad').val(),
        'firstlogin'   : $('#input-firstlogin').val(),
        'lastlogin'   : $('#input-lastlogin').val(),
        'vip_lev': $('#input-vip').val(),
        'jewel': $('#input-jewel').val(),
        'card_album': $('#input-card-album').val(),
        'wild_card': $('#input-wild-card').val(),
        'packs': $('#input-packs').val(),
        'spin': $('#input-spin').val(),
        'tour': $('#input-tour').val(),
        'staring_show': $('#input-staring-show').val(),
        'dailytask': $('#input-dailytask').val(),
        'paw_path': $('#input-paw_path').val(),
        'dailybonus': $('#input-dailybonus').val(),
        'egg': $('#input-egg').val(),
        'event_group': $('#input-event_group').val(),
        'achievement': $('#input-achievement').val(),
        'royal_league': $('#input-royal_league').val(),
        'piggybank': $('#input-piggybank').val(),
        'mysterysale': $('#input-mysterysale').val(),
        'unlocksale': $('#input-unlocksale').val(),
        'playtimes': $('#input-playtimes').val(),
        'tgif': $('#input-tgif').val(),
        'quest': $('#input-quest').val(),
        'coupon': $('#input-coupon').val(),
        'bigcollect': $('#input-bigcollect').val(),
        'diligentbee': $('#input-diligentbee').val(),
        'wildsale': $('#input-wildsale').val(),
        'daily_round': $('#input-daily_round').val(),
        'fishing': $('#input-fishing').val(),
        'club_event': $('#input-club_event').val(),
        'modify_order': $('#input-modify_order').val(),
        'wild_piece': $('#input-wild_piece').val(),
        'event_time':$('#input-event_time').val(),
        'carrot': $('#input-carrot').val(),
        'icecream': $('#input-icecream').val(),
        'booster': $('#input-booster').val(),
        'golden_hat': $('#input-golden_hat').val(),
        'dragon_treasure': $('#input-dragon_treasure').val(),
        'collection_suites_clear': $('#input-collection_suites_clear').val(),
        'columbus': $('#input-columbus').val(),
        'event_sale': $('#input-event_sale').val(),
        'task_collect': $('#input-task_collect').val(),
        'werewolf': $('#input-werewolf').val(),
        'checkin': $('#input-checkin').val(),
        'bonus_jackpot': $('#input-bonus_jackpot').val(),
        'choice_sale': $('#input-choice_sale').val(),
        'bus_shop': $('#input-bus_shop').val(),
        'chat_muted': $('#input-chat_muted').val(),
        'snake': $('#input-snake').val(),
        'lev_challenge': $('#input-lev_challenge').val(),
        'st_patrick': $('#input-st_patrick').val(),
        'album_late_act': $('#input-album_late_act').val(),
        'new_pass': $('#input-new_pass').val(),
        'theme_act_data_clear': $('#input-theme_act_data_clear').val(),
        'novice': $('#input-novice').val(),
        'black': $('#input-black').val(),
        'club_manager': $('#input-club_manager').val(),
        'pick': $('#input-pick').val(),
        'word': $('#input-word').val(),
        'potions_theme': $('#input-potions_theme').val(),
        'user_name': $('#input-user_name').val(),
        'birthday': $('#input-birthday').val(),
        'device': $('#input-device').val()
    };
    $.get('bingo_edit_user/'+user_id, param, function(data){
        console.log(data);
        var json_obj = JSON.parse(data);
        if (json_obj["error_code"] == 0) {
            $('#div-user-info').html(json_obj['html']);
        };
        alert(json_obj['error_msg']);
        $('#input-coins').val('');
        $('#input-lev').val(''),
        $('#input-powerups').val(''),
        $('#input-collections').val(''),
        $('#input-collections_all').val(''),
        $('#input-elite').val(''),
        $('#input-ad').val(''),
        $('#input-firstlogin').val(''),
        $('#input-lastlogin').val(''),
        $('#input-vip').val(''),
        $('#input-jewel').val(''),
        $('#input-card-album').val(''),
        $('#input-wild-card').val(''),
        $('#input-spin').val(''),
        $('#input-tour').val(''),
        $('#input-packs').val(''),
        $('#input-staring-show').val(''),
        $('#input-dailytask').val(''),
        $('#input-paw_path').val(''),
        $('#input-dailybonus').val(''),
        $('#input-egg').val(''),
        $('#input-event_group').val(''),
        $('#input-achievement').val(''),
        $('#input-royal_league').val(''),
        $('#input-piggybank').val(''),
        $('#input-mysterysale').val(''),
        $('#input-unlocksale').val(''),
        $('#input-playtimes').val(''),
        $('#input-tgif').val(''),
        $('#input-quest').val(''),
        $('#input-coupon').val(''),
        $('#input-bigcollect').val(''),
        $('#input-diligentbee').val(''),
        $('#input-wildsale').val(''),
        $('#input-daily_round').val(''),
        $('#input-fishing').val(''),
        $('#input-club_event').val(''),
        $('#input-modify_order').val(''),
        $('#input-wild_piece').val(''),
        $('#input-event_time').val(''),
        $('#input-carrot').val(''),
        $('#input-icecream').val(''),
        $('#input-booster').val(''),
        $('#input-golden_hat').val(''),
        $('#input-dragon_treasure').val(''),
        $('#input-collection_suites_clear').val(''),
        $('#input-columbus').val(''),
        $('#input-event_sale').val(''),
        $('#input-task_collect').val(''),
        $('#input-werewolf').val(''),
        $('#input-checkin').val(''),
        $('#input-bonus_jackpot').val(''),
        $('#input-choice_sale').val(''),
        $('#input-bus_shop').val(''),
        $('#input-chat_muted').val(''),
        $('#input-snake').val(''),
        $('#input-lev_challenge').val(''),
        $('#input-st_patrick').val(''),
        $('#input-album_late_act').val(''),
        $('#input-new_pass').val(''),
        $('#input-theme_act_data_clear').val(''),
        $('#input-novice').val(''),
        $('#input-black').val(''),
        $('#input-club_manager').val(''),
        $('#input-pick').val(''),
        $('#input-word').val(''),
        $('#input-potions_theme').val('')
        $('#input-user_name').val('')
        $('#input-birthday').val('')
        $('#input-device').val('')
    });
    update_modify();
}


var hotfixEditor;


$(function(){
    // 加载热更页签内容
    $("#hotfix").load("/bingo/hotfix");
    // 加载邮箱页签内容
    $("#email").load("/bingo/inbox");
    // 加载pass运营页签内容
    $("#pass").load("/bingo_pass_event");
    // 加载工具箱页签内容
    $("#tools").load("/bingo/tools");
    // 加载主题页签内容
    $("#theme").load("/bingo_theme");
    // 加载转账号页签内容
    $("#copy").load("/bingo_copy_user_wealth");
    // 加载自动化导出配置页签
    $("#config").load("/bingo_config_exporter");
    
    // 导航栏按钮监听
    $("#nav-button-tools").click(function(){
        showToolsTab();
    });
    $("#nav-button-user-data").click(function(){
        showUserDataTab();
    });
    $("#nav-button-theme").click(function(){
        showThemeTab();
    });
    $("#nav-button-email").click(function(){
        showEmailTab();
    });
    $("#nav-button-pass").click(function(){
        showPassTab();
    })
    $("#nav-button-copy").click(function(){
        showCopyTab();
    });
    $("#nav-button-configs").click(function(){
        showConfigTab();
    });
    $("#nav-button-hotfix").click(function(){
        showHotfixTab();
        if(!hotfixEditor){
            var editor = CodeMirror.fromTextArea(document.getElementById("hotfixpy"), {
                mode: {
                    name: "python",
                    version: 2,
                    singleLineStringErrors: false
                },
                lineNumbers: true,
                indentUnit: 4,
                matchBrackets: true,
                indentWithTabs: false
            });
            hotfixEditor = editor;
        }
    });

    // 显示玩家数据
    $("#btn-show-user-data").click(function(){ 
        load_bingo_user_info();
    });

    // 删除玩家
    $("#delete").click(function(){
        user_id = $('#input_user_id').val();
        if (confirm('Are you sure to delete ' + user_id))
            bingo_delete_user(user_id);
    });

    // 开好卡
    $("#bingo_generate_good_card").click(function(){
        user_id = $('#input_user_id').val();
        bingo_generate_good_card();
    });

    // 取消好卡
    $("#bingo_clear_good_card").click(function(){
        user_id = $('#input_user_id').val();
        bingo_clear_good_card();
    });

    // 测试支付
    $("#bingo_generate_test_payment").click(function(){
        user_id = $('#input_user_id').val();
        bingo_generate_test_payment();
    });

    // 取消测试支付
    $("#bingo_clear_test_payment").click(function(){
        user_id = $('#input_user_id').val();
        bingo_clear_test_payment();
    });

    $("#bingo_show_lastest_data").click(function(){
        load_bingo_lastest_data();
    });

    // 修改玩家数据
    $('#add-wealth').click(function(){
        bingo_edit_user();
    });

    $("#content > div").each(function(index, tab){
        if(index > 0){
            $(tab).addClass("hidden");
        }
    });
})
