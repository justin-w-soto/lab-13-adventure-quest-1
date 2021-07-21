function scoreHp(hp) {
    if (hp <= 0) {
        return 'dead';
    }
    if (hp < 35) {
        return 'weak & pathetic';
    }
    return 'fine';
}
export default scoreHp;

