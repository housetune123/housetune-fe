import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import './SalesOrder.scss';

function SalesOrder() {
  return (
    <>
      <main className="text-center">
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <Link
            to="/seller/product"
            className="text-decoration-none text-gray-400"
          >
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">商品總數</h5>
                  <p class="card-text">5</p>
                </div>
              </div>
            </div>
          </Link>
          <Link
            to="/seller/order/toship"
            className="text-decoration-none text-gray-400"
          >
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">待出貨</h5>
                  <p class="card-text">0</p>
                </div>
              </div>
            </div>
          </Link>
          <Link
            to="/seller/order/cancelled"
            className="text-decoration-none text-gray-400"
          >
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">不成立</h5>
                  <p class="card-text">0</p>
                </div>
              </div>
            </div>
          </Link>
          <Link
            to="/seller/product"
            className="text-decoration-none text-gray-400"
          >
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">評價</h5>
                  <p class="card-text">0</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}

export default SalesOrder;
