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
