"use client";
import styles from './grid-productos.module.css'
import ProductCard from '../ProductCard/ProductCard';

export default function GridProductos({ productos: productosProp, tipo }) {
  return (
    <div className={styles.grid_contenedor}>
      {productosProp?.map((producto, index) => (
        <ProductCard
          key={index}
          hasDiscount={index === 1}
          index={index}
        />
      ))}
    </div>
  )
}
