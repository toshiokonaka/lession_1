player.onChat("run", function () {
    agent.teleportToPlayer()
    agent.move(FORWARD, 3)
    agent.move(RIGHT, 3)
    agent.move(BACK, 3)
    agent.move(LEFT, 3)
})
