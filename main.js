var vueInstance = new Vue({
    el: "#app",
    data: {
        title: 'Áo thun thể thao',
        url: 'https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816279.html',
        target: '_blank',
        price: 200000,
        sales: 0.5,
        selectProduct: 0,
        listProducts: [

            {
                image: './images/black.jpg',
                quantity: 8,
                color: 'Màu đen'
            },
            {
                image: './images/blue.jpg',
                quantity: 5,
                color: 'Màu xanh'
            },
            {
                image: './images/red.jpg',
                quantity: 0,
                color: 'Màu đỏ'
            }
        ],
        listDesc: [
            'Chất liệu: polyester và thun',
            'Thoát mồ hôi tốt',
            'Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát',
            'Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc',
            'Chất liệu: polyester và thun'
        ],
        numberCard: 0,
        info: '<p>Mô tả: Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát và thoát mồ hôi tốt, kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc</p> '
    },
    methods: {
        handleClickColor(e, index) {
            this.selectProduct = index;
        },
        classActive(index) {
            return {
                active: this.selectProduct === index
            }
        },
        addCard(e) {
            if (this.numberCard + 1 > this.getProduct.quantity) {
                alert('Không đủ số lượng');
            } else {
                this.numberCard = this.numberCard + 1;
            }
            console.log(e.target)
        }
    },
    computed: {
        formatOriginalPrice() {
            var number = this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number)
        },
        formatFinalPrice() {
            var number = this.price - this.sales * this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number)
        },
        getProduct() {
            let index = this.selectProduct;
            return this.listProducts[index];
        }
    }
})