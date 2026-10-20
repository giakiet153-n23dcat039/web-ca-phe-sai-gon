import { Link } from 'react-router-dom'
import { SHOP } from '../data/shop'
import { products } from '../data/products'
import Pic from '../components/Pic'
import { productImg } from '../data/images'

function Home() {
  return (
    <>
      <section className="hero">
        <h1>Chào mừng đến với {SHOP.name}</h1>
        <p>Hương vị đậm đà, không gian ấm cúng. Cà phê nguyên chất từ Tây Nguyên và Đà Lạt.</p>
        <div className="hero-actions">
          <Link to="/products" className="btn btn-outline">Xem sản phẩm</Link>
          <Link to="/recipes" className="btn btn-outline">Công thức pha chế</Link>
        </div>
      </section>

      <section className="features">
        <div className="card">
          <Pic name="feature-nguyen-chat" alt="Hạt cà phê nguyên chất" />
          <h3 className="sr-only">Cà phê nguyên chất</h3>
          <p>Hạt cà phê chọn lọc từ Buôn Ma Thuột và Cầu Đất, không pha tạp, không hương liệu.</p>
        </div>
        <div className="card">
          <Pic name="feature-rang" alt="Hạt cà phê vừa rang" />
          <h3 className="sr-only">Rang theo đơn</h3>
          <p>Mỗi đơn hàng được rang và đóng gói mới để giữ hương thơm trọn vẹn.</p>
        </div>
        <div className="card">
          <Pic name="feature-kien-thuc" alt="Cành cà phê với quả chín" />
          <h3 className="sr-only">Hiểu cà phê hơn</h3>
          <p>Tìm hiểu các giống cà phê, vùng trồng và cách pha để chọn đúng vị bạn thích.</p>
        </div>
      </section>

      <section className="section">
        <h2>Sản phẩm nổi bật</h2>
        <div className="grid">
          {products.slice(0, 3).map((p) => (
            <div className="card product" key={p.id}>
              <Pic name={productImg[p.id]} alt={p.name} className="pic-square" />
              <h3>{p.name}</h3>
              <p className="muted">{p.flavor}</p>
              <p className="price">{p.price.toLocaleString('vi-VN')}đ <span>/ {p.weight}</span></p>
            </div>
          ))}
        </div>
        <p className="center"><Link to="/products" className="btn">Xem tất cả sản phẩm</Link></p>
      </section>

      <section className="cta">
        <h2>Đặt hàng ngay hôm nay</h2>
        <p>Gọi hoặc nhắn Zalo <a href={`tel:${SHOP.phone}`}>{SHOP.phone}</a> để được tư vấn chọn loại cà phê phù hợp.</p>
        <Link to="/contact" className="btn">Cách đặt hàng và đặt cọc</Link>
      </section>
    </>
  )
}
export default Home
