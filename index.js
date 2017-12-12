module.exports = function NotMystic(dispatch) {
    
    dispatch.hook('S_SPAWN_USER', 11, (event) => {
        if((event.templateId % 100) == 7){
            event.title = 1679;
            return true;
        }
    });
}