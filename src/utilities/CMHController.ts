class CMHController {
    private block:       HTMLElement | null      = null
    private cmh:         HTMLElement | null      = null
    private event:       MouseEvent  | null      = null
    private hideTimeout: number      | undefined = undefined

    constructor(
        _block:  HTMLElement | null, 
        _cmh:    HTMLElement | null
    ) {
        this.block  = _block
        this.cmh    = _cmh
    }
    
    public contextInit() {
        this.cmh?.addEventListener("click", (e: Event) => e.stopPropagation())
        this.block?.addEventListener("contextmenu", (e: MouseEvent) => {
            e.preventDefault()
            this.event = e
            this.openContext()
        })
    }
    
    public tooltipInit() {
        this.block?.addEventListener("mousemove", (e: MouseEvent) => {
            this.event = e
            this.openContext()
        })
        this.block?.addEventListener("mouseenter", () => clearTimeout(this.hideTimeout))
        this.block?.addEventListener("mouseleave", (e: MouseEvent) => {
            this.event = e
            this.hideTimeout = setTimeout(() => 
                this.closeContext()
          , 100) as unknown as number
        })
        
        this.cmh?.addEventListener("mousemove", (e: MouseEvent) => {
            this.event = e
            if(this.cursorInBlockChecker())
                this.openContext()
            else
                this.closeContext()
            
        })
        this.cmh?.addEventListener("mouseenter", () => clearTimeout(this.hideTimeout))
        this.cmh?.addEventListener("mouseleave", (e: MouseEvent) => {
            this.event = e
            this.hideTimeout = setTimeout(() => 
            this.closeContext()
          , 100) as unknown as number
        })
    }
    
    public openContext() {
        if(this.cmh && this.event){
            const x = this.event.clientX
            const y = this.event.clientY

            this.cmh.classList.add("active")

            const width  = this.cmh.clientWidth
            const height = this.cmh.clientHeight

            if(this.getSideHorizontal() === "L")
                this.cmh.style.left = `${x - width}px`
            else
                this.cmh.style.left = `${x}px`

            if(this.getSideVertical() === "U")
                this.cmh.style.top = `${y - height}px`
            else
                this.cmh.style.top = `${y}px`
            
        }
    }

    public closeContext() {
        this.cmh?.classList.remove("active")
    }

    private getSideHorizontal(){
        const cmhWidth      = this.cmh?.clientWidth
        const cmhPosX       = this.event?.clientX
        const screenWidth   = window.innerWidth
        
        if(cmhPosX && cmhWidth && screenWidth){
            if((screenWidth - (cmhPosX + cmhWidth)) < 5) return "L"
            else return "R"
            
        }
        return "R"
    }

    private getSideVertical(){
        const cmhHeight     = this.cmh?.clientHeight
        const cmhPosY       = this.event?.clientY
        const screenHeight  = window.innerHeight

        if(cmhPosY && cmhHeight && screenHeight){
            if((screenHeight - (cmhPosY + cmhHeight)) < 20 && (screenHeight - (screenHeight - cmhPosY)) > cmhHeight) return "U"
            else return "D"
        }
        return "D"
    }

    private cursorInBlockChecker(){
        const cmhPosX       = this.event?.clientX
        const cmhPosY       = this.event?.clientY
        const blockPosX     = this.block?.offsetLeft
        const blockPosY     = this.block?.offsetTop
        const blockWidth    = this.block?.clientWidth
        const blockHeight   = this.block?.clientHeight

        if(cmhPosX && cmhPosY && blockPosX && blockPosY && blockWidth && blockHeight){
            if(cmhPosX > blockPosX && cmhPosX < (blockPosX + blockWidth) 
            && cmhPosY > blockPosY && cmhPosY < (blockPosY + blockHeight)) 
                return true
        }
        return false
    }
}
export default CMHController