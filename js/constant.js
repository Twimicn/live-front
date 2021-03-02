(function (WIN) {
    var USER_ROLES = {
        0: '<span class="badge badge-dark">普通用户</span>',
        1: '<span class="badge badge-primary">管理员</span>',
    };
    var USER_STATE = {
        0: '<span class="badge badge-secondary">未激活</span>',
        1: '<span class="badge badge-success">已激活</span>',
        2: '<span class="badge badge-warning">禁用</span>',
    };
    WIN.Constant = {
        USER_ROLES: USER_ROLES,
        USER_STATE: USER_STATE,
    }
})(window);
