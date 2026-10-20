import { useState } from 'react'
import { products } from '../data/products'
import DepositBox from '../components/DepositBox'
import { SHOP } from '../data/shop'
import Pic from '../components/Pic'
import { productImg } from '../data/images'

const categories = ['Tất cả', ...new Set(products.map((p) => p.category))]

function Products() {
  const [active, setActive] = useState('Tất cả')
  const list = active === 'Tất cả' ? products : products.filter((p) => p.category === active)
  const vnd = (n) => n.toLocaleString('vi-VN') + 'đ'

  return (
    <div className="container">
      <h1>Sản phẩm</h1>
      <p className="lead">Chọn loại cà phê hợp với khẩu vị và cách pha của bạn. Giá bên dưới là giá tham khảo.</p>

      <DepositBox />

      <div className="tabs">
        {categories.map((c) => (
          <button key={c} className={c === active ? 'tab active' : 'tab'} onClick={() => setActive(c)}>
            {c}
          </button>
        ))}
      </div>

      <div className="grid">
        {list.map((p) => (
          <article className="card product" key={p.id}>
            <Pic name={productImg[p.id]} alt={p.name} className="pic-square" />
            <h3>{p.name}</h3>
            <p className="badges"><span>{p.weight}</span><span>{p.roast}</span></p>
            <p>{p.desc}</p>
            <p><strong>Hương vị:</strong> {p.flavor}</p>
            <p><strong>Phù hợp:</strong> {p.bestFor}</p>
            <p className="price">{vnd(p.price)} <span>/ {p.weight}</span></p>
            <p className="deposit-line">Đặt cọc {SHOP.depositPercent}%: <strong>{vnd(p.price * SHOP.depositPercent / 100)}</strong></p>
            <a className="btn small" href={`tel:${SHOP.phone}`}>Gọi đặt hàng</a>
          </article>
        ))}
      </div>
    </div>
  )
}
export default Products
