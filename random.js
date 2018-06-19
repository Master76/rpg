let gs_nSeed = 2147483647;

/**
 * @param {number} p_nSeed 
 */
function srand(p_nSeed)
{
    gs_nSeed = p_nSeed;
}

/**
 * @returns {number}
 */
function rand()
{
    gs_nSeed = ((gs_nSeed * 1103515245) + 12345) & 0x7fffffff;
    return gs_nSeed;
}

module.exports = {
    srand,
    rand
};
