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
          },
          callback:{
            message:"用户名不存在"
          }
        }
      },
      password:{
        validators:{
          notEmpty:{
            message:"用户密码不能为空哦！"
          },
          callback:{
            message:"密码错误"
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
  $form.on("success.form.bv",function (e) {
    e.preventDefault();
    $.ajax({
      type:"post",
      url:"/employee/employeeLogin",
      dataType:"json",
      data:$form.serialize(),
      success:function (info) {
        if(info.success){
          location.href = "index.html"
        }
        if(info.error == 1000){
          $form.data("bootstrapValidator").updateStatus("username","INVALID","callback");
        }
        if(info.error == 1001){
          $form.data("bootstrapValidator").updateStatus("password","INVALID","callback");
        }
      }
    })
  })
  $("[type='reset']").on("click",function () {
    $form.data("bootstrapValidator").resetForm();
  })
});