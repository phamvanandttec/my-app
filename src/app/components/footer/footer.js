'use client'
import styles from "./footer.module.css";
export function Footer() {
    return (

        <div className={styles.mainFooter}>
          <footer className={styles.footer}>
              <section className={styles.footerSection}>
                <div>
                  <strong>Tổng đài hỗ trợ</strong>
                  <ul>
                    <li>Gọi mua: 1900 232 461 (8:00 - 21:30)</li>
                    <li>Khiếu nại: 1800.1063 (8:00 - 21:30)</li>
                    <li>Bảo hành: 1900 232 465 (8:00 - 21:00)</li>
                  </ul>
                  </div>
                  <div>
                  <strong>Về công ty</strong>
                  <ul>
                    <li>Giới thiệu công ty (MWG.vn)</li>
                    <li>Tuyển dụng</li>
                    <li>Gửi góp ý, khiếu nại</li>
                    <li>Tìm siêu thị (2961 shop)</li>
                  </ul>
                  </div>
                  <div>
                  <strong>Thông tin khác</strong>
                  <ul>
                    <li>Tích điểm Quà tặng VIP</li>
                    <li>Lịch sử mua hàng</li>
                    <li>Đăng ký bán hàng CTV chiết khấu cao</li>
                    <li>Chính sách đổi trả</li>
                    <li>Xem thêm</li>
                  </ul>
                  </div>
                <div>Website cùng tập đoàn
                  <ul className={styles.website}>
                    <li><i className={styles.tgdd}></i> </li>
                    <li><i className={styles.topzone}></i> </li>
                    <li><i className={styles.bhx}></i> </li>
                    <li><i className={styles.ankhang}></i> </li>
                    <li><i className={styles.ankhang}></i> </li>
                    </ul>
                </div>
              </section>
              <div className={styles.copyright}>
              © 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH & ĐT TP.HCM cấp ngày 02/01/2007. GPMXH: 21/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 11/01/2021.
Địa chỉ: 128 Trần Quang Khải, P.Tân Định, Q.1, TP.Hồ Chí Minh. Địa chỉ liên hệ và gửi chứng từ: Lô T2-1.2, Đường D1, Đ. D1, P.Tân Phú, TP.Thủ Đức, TP.Hồ Chí Minh. Điện thoại: 028 38125960. Email: cskh@thegioididong.com. Chịu trách nhiệm nội dung: Huỳnh Văn Tốt. Email: hotrotmdt@thegioididong.com.
              </div>
          </footer>
       </div>
    )
}