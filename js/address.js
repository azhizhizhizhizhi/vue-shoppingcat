new Vue({
    el:'.container',
    data:{
        limtiNum:3,
        addressList:[],
        currentIndex:0,
        shippingMethod:1
    },
    mounted:function(){
        this.$nextTick(function(){
            this.getAddressList();
        });
    },
    computed:{
        fillterAddress:function(){
            return this.addressList.slice(0,this.limtiNum);
        }
    },
    methods:{
        getAddressList:function(){
            var _this= this;
            this.$http.get("data/address.json").then(function(response){
                var res = response.data;
                if(res.status == "0"){
                    _this.addressList = res.result;
                }
            });
        },
        loadMore:function(){
            this.limtiNum = this.addressList.length;
        },
        setDefault:function(addressId){
            this.addressList.forEach(function(address,index){
                if(address.addressId == addressId){
                    address.isDefault = true;
                }else{
                    address.isDefault = false;
                }
            })
        }
    }
})