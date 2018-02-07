function getAccounts() {
  $.ajax({
    url: 'https://studio.cmdspace.cn/api/Accounts',
    method: 'GET',
    success: function(res) {
      console.log(res)
    }
  })
}
