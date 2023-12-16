console.log(location.search)
var id = location.search.substr(4)  
console.log(id)
const { createApp } = Vue
createApp({
    data() {
        return {
            id: 0,
            itemProduct: "",
            itemCategory: "",
            itemBrand:"",
            itemStock: "",
            itemPrice:"",
            url: 'https://tototo159.pythonanywhere.com/products/' + id,
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id = data.id
                    this.itemProduct = data.itemProduct
                    this.itemCategory = data.itemCategory
                    this.itemBrand = data.itemBrand
                    this.itemStock = data.itemStock
                    this.itemPrice = data.itemPrice
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        modify() {
            let product = {
                itemProduct: this.itemProduct,
                itemCategory: this.itemCategory,
                itemBrand: this.itemBrand,
                itemStock: this.itemStock,
                itemPrice: this.itemPrice,
            }
            var options = {
                body: JSON.stringify(product),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    console.log(product)
                    alert("Registro modificado")                    
                    window.location.href = "./index.html";        
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')
