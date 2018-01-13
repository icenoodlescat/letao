$(function () {
  var $form = $("form");
  //初始化表单校验规则
  $form.bootstrapValidator({
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields:{
      username:{
        validators:{
          notEmpty:{
            message:"用户名不能为空哦！"
          }
        }
      },
      password:{
        validators:{
          notEmpty:{
            message:"用户密码不能为空哦！"
          },
          stringLength:{
            min:6,
            max:12,
            message:"密码必须6-12位"
          }
        }
      }
    }
  });
});