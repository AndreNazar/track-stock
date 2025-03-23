export interface ILogin {
  telegram: string
  password: string
}

export class Api {
  constructor() {
    this.URL = "https://engine.amru.host/api/"
    this.token = localStorage.getItem("access-token")
  }
  URL
  token: string | null

  async login(creds: ILogin) {
    return fetch(this.URL + "profile/sig-in", {
      method: "POST",
      body: JSON.stringify(creds),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this.getJsonResponse)
  }

  private async getJsonResponse(res: Response) {
    if (res.ok) {
      return res.json()
    }
    if (res.status === 401 || res.status === 403) {
      localStorage.removeItem("access-token")
    }
    const errorText = await res.text()
    throw new Error(`Error ${res.status}: ${errorText}`)
  }

  async createSneakersLot(data: any) {
    return fetch(this.URL + "sneakers/sneakers", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `${this.token ?? ""}`,
      },
    }).then(this.getJsonResponse)
  }

  async getBrands() {
    return fetch(this.URL + "brands/brand", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${this.token ?? ""}`,
      },
    }).then(this.getJsonResponse)
  }

  async getConditions() {
    return fetch(this.URL + "conditions/condition", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${this.token ?? ""}`,
      },
    }).then(this.getJsonResponse)
  }

  async getSneakers() {
    console.log(this.token)
    return fetch(this.URL + "sneakers/sneakers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${this.token ?? ""}`,
      },
    }).then(this.getJsonResponse)
  }
  
  async putInStore(id: number) {
    return fetch(`${this.URL}sneakers/sneakers/put_in_store/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${this.token ?? ""}`,
      },
    }).then(this.getJsonResponse)
  }
  async setSoldOut(id: number) {
    return fetch(`${this.URL}sneakers/sneakers/sold_out/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${this.token ?? ""}`,
      },
    }).then(this.getJsonResponse)
  }
  async deleteFromStore(id: number) {
    return fetch(`${this.URL}sneakers/sneakers/delete_from_store/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${this.token ?? ""}`,
      },
    }).then(this.getJsonResponse)
  }

  async getSneakerById(id: number) {
    return fetch(`${this.URL}sneakers/sneakers/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${this.token ?? ""}`,
      },
    }).then(this.getJsonResponse)
  }

  async updateSneaker(data: any) {
    return fetch(`${this.URL}sneakers/sneakers`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `${this.token ?? ""}`,
      },
    }).then(this.getJsonResponse)
  }

  async deleteSneaker(id: number) {
    return fetch(`${this.URL}sneakers/sneakers`, {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `${this.token ?? ""}`,
      },
    }).then(this.getJsonResponse)
  }

  async signUp(data: { user_name: string; email: string; telegram: string; password: string }) {
    return fetch(this.URL + "profile/sig-up", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this.getJsonResponse)
  }
  
  async loadProductInfo(article: string) {
    return fetch(`${this.URL}load/load`, {
      method: "POST",
      body: JSON.stringify({ article }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `${this.token ?? ""}`,
      },
    }).then(this.getJsonResponse)
  }
}

export default Api
