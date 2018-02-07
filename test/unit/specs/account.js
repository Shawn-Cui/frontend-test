describe('mocking ajax', function() {
  
  describe('suite wide usage', function() {
    beforeEach(function() {
      jasmine.Ajax.install()
    })

    afterEach(function() {
      jasmine.Ajax.uninstall()
    })

    it("get all accounts", function() {
      var doneFn = jasmine.createSpy("success")
      
      var xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function(args) {
        if (this.readyState == this.DONE) {
          doneFn(this.responseText)
        }
      }

      xhr.open("GET", "https://studio.cmdspace.cn/api/Accounts")
      xhr.send()

      expect(jasmine.Ajax.requests.mostRecent().url).toBe("https://studio.cmdspace.cn/api/Accounts")
      expect(doneFn).not.toHaveBeenCalled()

      jasmine.Ajax.requests.mostRecent().respondWith({
        "status": 200,
        "contentType": "application/json; charset=utf-8",
        "responseText": '[{"name":"崔涛","phone":"18217005253","companyName":"方程式","isSigned":true,"dateOfSigned":"2018-01-26T11:35:40.743Z","email":"oZCcV0cv6_pcVsDAWycdGZ3mAhFw@wxf864a15b2a6b30c2.com","id":1}]'
      })

      expect(doneFn).toHaveBeenCalledWith('[{"name":"崔涛","phone":"18217005253","companyName":"方程式","isSigned":true,"dateOfSigned":"2018-01-26T11:35:40.743Z","email":"oZCcV0cv6_pcVsDAWycdGZ3mAhFw@wxf864a15b2a6b30c2.com","id":1}]')
    })
  })
})
