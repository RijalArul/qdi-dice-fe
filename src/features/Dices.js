import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'

export default function Dices () {
  return (
    <div>
      <Navbar />
      <div class='container mt-5'>
        <div class='row'>
          <div class='col-sm-6'>
            <div class='card'>
              <div class='card-body'>
                <h5 class='card-title'>Special title treatment</h5>
                <p class='card-text'>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href='#' class='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class='col-sm-6'>
            <div class='card'>
              <div class='card-body'>
                <h5 class='card-title'>Special title treatment</h5>
                <p class='card-text'>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href='#' class='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
