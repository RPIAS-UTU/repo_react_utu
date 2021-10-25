

import React, { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { Button } from 'primereact/button';

const Menu = () => {

    const [activeIndex, setActiveIndex] = useState(3);

    const items = [
        {label: 'Home', icon: 'pi pi-fw pi-home', command:()=>{ window.location.hash="/"; }},
        {label: 'Contadores', icon: 'pi pi-fw pi-calendar', command:()=>{ window.location.hash="/contadores"; }},
        {label: 'Edit', icon: 'pi pi-fw pi-pencil', command:()=>{ window.location.hash="/fileupload"; }},
        {label: 'Documentation', icon: 'pi pi-fw pi-file', command:()=>{ window.location.hash="/fileupload"; }},
        {label: 'Settings', icon: 'pi pi-fw pi-cog', command:()=>{ window.location.hash="/fileupload"; }}
    ];

    return (
        <div>
           
            <div className="card">
                <h5>Programmatic</h5>
              
                <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            </div>
        </div>
    );
}

export default Menu;