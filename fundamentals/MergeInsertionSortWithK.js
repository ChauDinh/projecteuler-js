/**
 * This is the problem 2-1 named: Insertion sort on small arrays in merge sort of CLRS
 *
 * Since the constant factors of insertion sort can make it faster in practice for small enough sizes than merge sort. We can coarsen the leaves of recursion by using insertion sort within merge sort when subproblems are sufficiently small.
 *
 * In particular, a modification to merge sort in which n/k sublists of length k are sorted using insertion sort and then merged using the standard merging mechanism.
 *
 * However, how should we choose k effectively in practice?
 *
 */

/**
 * Insertion Sort on small arrays in merge sort
 *
 * 1. Insertion sort can sort the n/k sublists, each of length, in O(nk) worst-case time.
 *
 * Proof: Since insertion sort takes O(k^2) time per k-element list in the worst case, sorting n/k lists would takes O(nk^2/k) = O(nk) worst-case time.
 *
 * 2. How to merge the sublists in O(nlog(n/k)) worst-case time?
 *
 * Answer:
 */
