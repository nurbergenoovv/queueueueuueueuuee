import ticket from "@/types/ticket"

type data = {
    id: number
    table_num: number
}

export type WSCardScreen = {
    command: string
    to: number
    data: ticket | string
}

let socket: WebSocket | null = null

export const initiateSocket = (url: string = process.env.NEXT_PUBLIC_WS_URL!): void => {
    socket = new WebSocket(url)
    socket.onopen = () => {
        console.log(`Connected to WebSocket at ${url}`)
    }
    socket.onclose = () => {
        console.log('Disconnected from WebSocket')
    }
}

export const disconnectSocket = (): void => {
    if (socket) {
        socket.close()
    }
}

export const subscribeToEvent = (callback: (data: WSCardScreen) => void): void => {
    if (!socket) return;

    socket.onmessage = (event) => {
        try {
            const eventData: WSCardScreen = JSON.parse(event.data);
            console.log(eventData)
            callback(eventData)
        } catch (error) {
            console.error("Error parsing WebSocket message:", error);
        }
    }
}

export const sendEvent = (data: any): void => {
    if (socket) {
        socket.send(JSON.stringify(data))
    }
}
