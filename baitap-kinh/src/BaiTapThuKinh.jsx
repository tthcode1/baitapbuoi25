import React, { useState } from "react";

const dataGlasses = [
  { id: 1, price: 30, name: "GUCCI G8850U", url: "/glassesImage/v1.png", desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip." },
  { id: 2, price: 50, name: "GUCCI G8759H", url: "/glassesImage/v2.png", desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip." },
  { id: 3, price: 30, name: "DIOR D6700HQ", url: "/glassesImage/v3.png", desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip." },
  { id: 4, price: 70, name: "DIOR D6005U", url: "/glassesImage/v4.png", desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip." },
  { id: 5, price: 40, name: "PRADA P8750", url: "/glassesImage/v5.png", desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip." },
  { id: 6, price: 60, name: "PRADA P9700", url: "/glassesImage/v6.png", desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip." },
  { id: 7, price: 80, name: "FENDI F8750", url: "/glassesImage/v7.png", desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip." },
  { id: 8, price: 100, name: "FENDI F8500", url: "/glassesImage/v8.png", desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip." },
  { id: 9, price: 60, name: "FENDI F4300", url: "/glassesImage/v9.png", desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip." },
];

export default function BaiTapThuKinh() {
  // Đặt giá trị khởi tạo là null để người mẫu bên phải trống lúc ban đầu
  const [selectedGlass, setSelectedGlass] = useState(null);

  // Lấy dữ liệu kính FENDI F8750 (id 7) làm mẫu tĩnh cho người mẫu bên trái
  const defaultGlass = dataGlasses.find(glass => glass.id === 7);

  return (
    <div
      style={{
        backgroundImage: "url(/glassesImage/background.jpg)", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", minHeight: "100vh" }}>
        <h3 className="text-center text-light p-4 m-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          TRY GLASSES APP ONLINE
        </h3>

        <div className="container">
          <div className="row mt-5 justify-content-center">
            
            {/* ---- NGƯỜI MẪU BÊN TRÁI (MẪU TĨNH) ---- */}
            <div className="col-5 d-flex justify-content-center">
              <div className="position-relative">
                <img src="/glassesImage/model.jpg" alt="model" style={{ width: "250px" }} />
                
                <img
                  src={defaultGlass.url}
                  alt="glass"
                  className="position-absolute"
                  style={{
                    width: "150px", 
                    top: "75px",    
                    left: "50%",    
                    transform: "translateX(-50%)", 
                    opacity: 0.8,
                  }}
                />
                 <div
                  className="position-absolute bottom-0 start-0 w-100 p-2"
                  style={{
                    backgroundColor: "rgba(255, 165, 0, 0.5)",
                    height: "100px",
                    overflow: "hidden"
                  }}
                >
                  <h6 className="text-primary fw-bold mb-1">{defaultGlass.name}</h6>
                  <p className="text-white m-0" style={{ fontSize: "12px" }}>
                    {defaultGlass.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* ---- NGƯỜI MẪU BÊN PHẢI (THAY ĐỔI THEO CLICK) ---- */}
            <div className="col-5 d-flex justify-content-center">
              <div className="position-relative">
                <img src="/glassesImage/model.jpg" alt="model" style={{ width: "250px" }} />

                {/* Giao diện kính và mô tả chỉ hiển thị khi selectedGlass khác null */}
                {selectedGlass && (
                  <>
                    <img
                      src={selectedGlass.url}
                      alt="glass"
                      className="position-absolute"
                      style={{
                        width: "150px",
                        top: "75px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        opacity: 0.8,
                      }}
                    />
                    <div
                      className="position-absolute bottom-0 start-0 w-100 p-2"
                      style={{
                        backgroundColor: "rgba(255, 165, 0, 0.5)",
                        height: "100px",
                        overflow: "hidden"
                      }}
                    >
                      <h6 className="text-primary fw-bold mb-1">{selectedGlass.name}</h6>
                      <p className="text-white m-0" style={{ fontSize: "12px" }}>
                        {selectedGlass.desc}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>

          </div>

          <div className="row mt-5 justify-content-center">
            <div className="col-10">
              <div className="bg-white p-4 d-flex flex-wrap gap-4 justify-content-center" style={{ minHeight: "150px", borderRadius: "10px" }}>
                {dataGlasses.map((glass, index) => {
                  return (
                    <img
                      key={index}
                      src={glass.url}
                      alt="glasses-item"
                      style={{
                        width: "110px",
                        height: "50px",
                        objectFit: "contain",
                        cursor: "pointer",
                        border: "1px solid #ddd",
                        padding: "5px",
                        borderColor: selectedGlass?.id === glass.id ? "blue" : "#ddd" 
                      }}
                      onClick={() => setSelectedGlass(glass)}
                    />
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}