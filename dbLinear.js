const dblLinear = (n) => {
    let u = [1] , x = 0 , y = 0;
    for(let i = 0; i < n; i++){
        let nX  = 2 * u[x] + 1 , nY = 3 * u[y] + 1;
        if(nX <= nY){
            u.push(nX)
            x++;
            if(nX == nY)
                y++;
        }else {
            u.push(nY)
            y++;
            }
    }
    return u[n]
}
