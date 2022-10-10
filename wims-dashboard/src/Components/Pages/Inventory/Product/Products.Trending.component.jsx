import React from 'react';
import {Panel, Carousel} from "rsuite";

function ProductsTrendingComponent(){
    return(
        <Carousel autoplay className="custom-slider" style={{height: 100}}>
            <Panel>
                <div
                    style={{
                    width: 60,
                    height: 60,
                    float: 'left',
                    marginRight: 10,
                    background: '#eee'
                }}
                > 
                    <img src='/Assets/Products/CLager.png' style={{ width: 60 }} />
                </div>
                    <p>Castle Lager</p>
            </Panel>
            <Panel>
                <div
                    style={{
                    width: 60,
                    height: 60,
                    float: 'left',
                    marginRight: 10,
                    background: '#eee'
                }}
                > 
                    <img src='/Assets/Products/VL.jpg' style={{ width: 60 }} />
                </div>
                    <p>van loveren</p>
            </Panel>
            <Panel>
                <div
                    style={{
                    width: 60,
                    height: 60,
                    float: 'left',
                    marginRight: 10,
                    background: '#eee'
                }}
                > 
                    <img src='/Assets/Products/CM.jfif' style={{ width: 60 }} />
                </div>
                    <p>Captian Morgan</p>
            </Panel>
        </Carousel>
    )
}

export default ProductsTrendingComponent