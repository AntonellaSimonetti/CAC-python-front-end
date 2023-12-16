const app = Vue.createApp({
    data() {
        return {
            products: [],
            url: 'https://tototo159.pythonanywhere.com/products',
            error: false,
            loading: true, 
            itemProduct: '',  // Make sure to add other properties if they are used in your methods
            itemCategory: '',
            itemBrand: '',     // Add this line to define itemBrand
            itemStock: '',
            itemPrice: ''
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json()).then(item => {
                    this.products = item;
                    this.loading = false
                    console.log(item)
                    console.log()
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        delete(id) {
            console.log('Delete button clicked for ID:', id);
            /* const url = 'https://tototo159.pythonanywhere.com/products/'+ id;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
                    alert('Registro Eliminado')
                    location.reload(); // recarga el json luego de eliminado el registro
                }) */
        },
        insert() {
            let product = {
                itemProduct: this.itemProduct,
                itemCategory: this.itemCategory,
                itemBrand: this.itemBrand,
                itemStock: this.itemStock,
                itemPrice: this.itemPrice
            }
            var options = {
                body: JSON.stringify(product),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado con éxito")
                    location.reload();  // recarga productos.html
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")  // puedo mostrar el error tambien
                })
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')