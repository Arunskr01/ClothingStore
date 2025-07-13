import { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { ShopContext } from '../Context/ShopContext';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const toggleCategory = (e) => {
    const value = e.target.value;
    category.includes(value)
      ? setCategory((prev) => prev.filter((item) => item !== value))
      : setCategory((prev) => [...prev, value]);
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    subCategory.includes(value)
      ? setSubCategory((prev) => prev.filter((item) => item !== value))
      : setSubCategory((prev) => [...prev, value]);
  };

  const applyFilter = () => {
    if (!products || products.length === 0) return;
    let productsCopy = [...products];
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase().trim())
      );
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productsCopy);
  };


  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);



  return (
    <div className="d-flex flex-column flex-sm-row gap-2 pt-5 border-top">
      {/* Filter Section */}
      <div className="min-w-200px">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="ms-2 mb-4 my-2 h5 d-flex align-items-center gap-2"
          style={{color: 'green'}}
        >
          Filters
          <img
            src={assets.dropdown_icon}
            alt=""
            className={`d-sm-none ${showFilter ? 'rotate-90' : ''}`}
            style={{ height: '12px', transition: 'transform 0.3s', transform: showFilter ? 'rotate(90deg)' : 'rotate(0deg)' }}
          />
        </p>

        {/* Category Filter */}
        <div style={{borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}} className={`ms-2 border p-3 mt-3 ${showFilter ? '' : 'd-none d-sm-block'}`}>
          <p className="mb-2 small fw-bold" style={{color: 'green'}}>CATEGORIES</p>
          <div className="d-flex flex-column gap-2 small text-muted">
            {['Men', 'Women', 'Kids'].map((cat) => (
              <label key={cat} className="d-flex align-items-center gap-2">
                <input
                  type="checkbox"
                  value={cat}
                  onChange={toggleCategory}
                  className="form-check-input"
                  style={{ width: '1rem' }}
                />
                {cat.toUpperCase()}
              </label>
            ))}
          </div>
        </div>

        {/* Subcategory Filter */}
        <div style={{borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}} className={`ms-2 border p-3 my-4 ${showFilter ? '' : 'd-none d-sm-block'}`}>
          <p className="mb-2 small fw-bold" style={{color: 'green'}}>TYPES</p>
          <div className="d-flex flex-column gap-2 small text-muted">
            {['Topwear', 'Bottomwear', 'Winterwear'].map((type) => (
              <label key={type} className="d-flex align-items-center gap-2">
                <input
                  type="checkbox"
                  value={type}
                  onChange={toggleSubCategory}
                  className="form-check-input"
                  style={{ width: '1rem' }}
                />
                {type}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="flex-grow-1">
        <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
          <h3 className='text-center py-8 text-3xl font-bold text-gray-700' style={{ color: 'green' }}>
            COLLECTIONS
          </h3>
        </div>

        {/* Product Grid */}
        <div className="row row-cols-2 row-cols-lg-3 row-cols-xl-4 g-3">
          {filterProducts.map((product) => (
            <div className="col" key={product._id}>
              <ProductItem
                id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
