"use client"

import { useEffect, useState } from "react";

export default function Home() {

  const [coords, setCoords] = useState([0, 0, 0])
  const [bots, setBots] = useState([])
  const [showPass, setShow] = useState(false)
  const [hideCoords, setHide] = useState(false)
  const [recentBots, setRecent] = useState([])

  useEffect(() => {
    setInterval(() => {
      fetch("http://localhost:1492/bots").then(data => data.json()).then(data => {
        setBots(data)
      })
    }, 2000);

    setCoords([localStorage.getItem("dropx") ?? 0, localStorage.getItem("dropy") ?? 0, localStorage.getItem("dropz") ?? 0])
    if (localStorage.getItem("recentBots")) {
      setRecent(JSON.parse(localStorage.getItem("recentBots")))
    } else {
      setRecent([])
    }
  }, [])

  function inputHandler(ev) {
    if (ev.target.value == "") ev.target.value = 0
    localStorage.setItem(ev.target.id, ev.target.value)
    setCoords([document.getElementById("dropx").value, document.getElementById("dropy").value, document.getElementById("dropz").value])
  }

  function postTask(body) {
    fetch("http://localhost:1492/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    }).catch(err => console.log(err))
  }

  function startBot() {
    const username = document.getElementById("bot1user").value
    const password = document.getElementById("bot1pass").value

    if (username == "" || password == "") {
      alert("Username and password required")
      return
    }

    const newRecent = [{ username: username, password: password }, ...recentBots.filter(b => b.username != username)]
    localStorage.setItem("recentBots", JSON.stringify(newRecent))
    setRecent(newRecent)
    postTask({ task: "start", username: username, password: password })
  }

  function setLogin(username, password) {
    document.getElementById("bot1user").value = username
    document.getElementById("bot1pass").value = password
  }

  return (
    <>
      <header className="text-white px-2 flex gap-20 py-2"><strong><span className="text-orange-400">DONKEY DUPE BOTS</span> by <a className="underline" target="_blank" href="https://github.com/CarloxCoC">carlox</a></strong>
      <div className="flex gap-2 items-center">
        <h2>All projects:</h2>
        <a target="_blank" className="projects" href="https://www.youtube.com/watch?v=F6Xiq0VxIUU">Delivery Bot</a>
        <a target="_blank" className="projects" href="https://www.youtube.com/watch?v=sxPUp7Ye3tI">MapArt</a>
        <a target="_blank" className="projects" href="https://map.carlox.es">Real-time updating map</a>
        <a target="_blank" className="projects" href="https://6b6t.vercel.app/">Interactive Map</a>
        <a target="_blank" className="projects" href="https://www.youtube.com/watch?v=uXhc0YpfUCA">13M obsidian logo</a>
        <a target="_blank" className="projects" href="https://www.youtube.com/watch?v=fIIR2w81xJA">5m Obsidian logo</a>
        <a target="_blank" className="discord" href="https://discord.com/w6Yu6DF">Discord</a>
      </div>
      
      </header>
      <main className="flex flex-row p-12 gap-4">
        <div className="actions">
          <h1><strong>Actions</strong></h1>
          <div className='flex justify-between'>
            <button onClick={() => { postTask({ task: "openall" }) }}>Open Inventory</button>
            <button onClick={() => { postTask({ task: "pickall" }) }}>Pick Items</button>
          </div>

          <div className="container mt-1">
            <strong>Drop coords</strong>
            x<input onBlur={inputHandler} id="dropx" defaultValue={coords[0]} type={hideCoords ? "password" : "number"}></input>
            y<input onBlur={inputHandler} id="dropy" defaultValue={coords[1]} type={hideCoords ? "password" : "number"}></input>
            z<input onBlur={inputHandler} id="dropz" defaultValue={coords[2]} type={hideCoords ? "password" : "number"}></input>
            <div className="flex items-center">
              <input className="showpass" type="checkbox" onClick={() => { setHide(!hideCoords) }}></input><small className="ml-1">Hide coords</small>
            </div>
            <button className='mt-2' onClick={() => { postTask({ task: "dropall", coords: { x: coords[0], y: coords[1], z: coords[2] } }) }}>Drop Items</button>
          </div>
        </div>

        <div className="container">
          <h1><strong>Bots settings</strong></h1>
          <input id="bot1user" type="text" placeholder="username"></input>
          <input className="mt-1" id="bot1pass" type={showPass ? 'text' : 'password'} placeholder="password"></input>
          <div className="flex items-center">
            <input className="showpass" type="checkbox" onClick={() => { setShow(!showPass) }}></input><small className="ml-1">Show password</small>
          </div>
          <div className="mt-0.5 mb-4">
            <button className="min-w-full" onClick={startBot}>Start</button>
          </div>
          <strong>Previous bots</strong>
          {recentBots.slice(0, 5).map(b => <button key={b.username} onClick={() => { setLogin(b.username, b.password) }} className="flex items-center mt-1"><img className="w-4 h-4 mr-2" src={"https://minotar.net/avatar/" + b.username}></img><p>{b.username}</p></button>)}
        </div>

        <div className="container">
          <h1><strong>Bots ({bots.length})</strong></h1>
          {bots.map(bot => <div key={bot} className="flex gap-1 items-center m-0.5 px-1 justify-between">
            <div className="flex items-center">
              <img className="w-4 h-4 mr-2" src={"https://minotar.net/avatar/" + bot}></img>
              <strong>{bot}</strong>
            </div>
            <button onClick={() => { postTask({ task: "stop", username: bot }) }}>Stop</button>
          </div>)}
        </div>
      </main>
    </>
  )
}
