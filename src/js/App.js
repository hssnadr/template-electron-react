import React from 'react'

export default function App() {
    return(
        <div>
            <h1>Electron x React</h1>
            <p>webpack x babel x sass</p>
            <button onClick={() => {
                electron.notificationApi.sendNotification('Hello!')
                }}>Notify</button>
        </div>
    )
}