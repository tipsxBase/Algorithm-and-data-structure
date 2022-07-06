/**
 * 这里LRU 缓存主要通过 Map 的特性创建的缓存
 * 主要知识点：
 * Map.prototype.keys() 返回一个引用的 Iterator 对象。它包含按照顺序插入 Map 对象中每个元素的 key 值。
 * 最近最少使用的实现原理就是借助 Map 的上述特性
 * 在 get 时，只要将当前 get 的 key 从 cache 中删除，然后重新添加，根据 Map.prototype.keys() 这个 key 会重新被
 * 插入到 keys 迭代器的最后
 * 在 put 时，如果缓存已经满了，如果要删除的一定是 Map.prototype.keys().next().value，因为某个key 被使用过的话，
 * 就会被添加到  keys 迭代器的最后，Map.prototype.keys().next().value 代表的就是最近没有使用的 key
 */








/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
	if(!Number.isInteger(capacity) || capacity < 0) {
		throw new TypeError('Invalid capacity')
	}
	this._capacity = capacity
	this.cache = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
	// 如果当前key的值被使用，那么就将他移到 this.cache.keys() 迭代器的最后
	// 避免在put时将它删除
	if(this.cache.has(key)) {
		const value = this.cache.get(key)
		this.cache.delete(key)
		this.cache.set(key, value)
		return value
	}
	return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
	// 如果存在则更新
	if(this.cache.has(key)) {
		this.cache.delete(key)
	}else if(this.cache.size === this._capacity) {
		const deletedKey = this.cache.keys().next().value
		this.cache.delete(deletedKey)
	}
	this.cache.set(key, value)
};

const lRUCache = new LRUCache(2);
console.log(lRUCache.get(2));  
lRUCache.put(2, 6); 
console.log(lRUCache.get(1))
lRUCache.put(1, 5); 
lRUCache.put(1, 2); 
console.log(lRUCache.get(1))
console.log(lRUCache.get(2))