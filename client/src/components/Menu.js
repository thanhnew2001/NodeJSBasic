import React, { useState, useEffect } from "react"

export default function Menu() {

    return (
        <div>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">PMS</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="/">Home</a></li>
                        <li><a href="/product">Product</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )

}