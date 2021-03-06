var Nodes = function(client){
	this.client = client;
};

Nodes.prototype.createNodePath = function(nodeId){
	var path = '/users/' + this.client.userId + '/nodes';
	if(nodeId){
		path += '/' + nodeId;
	}
	return path;
};

Nodes.prototype.add = function(payload, callback){
	var path = this.createNodePath();
	this.client.post(path, payload, callback);
};

Nodes.prototype.get = function(options, callback){
	var path = this.createNodePath();
	if(options.node_id){
		path += '/' + options.node_id;
	}
	this.client.get(path, callback);
};

Nodes.prototype.verify = function(options, payload, callback){
	var path = this.createNodePath();
	if(options.node_id){
		path += '/' + options.node_id;
		this.client.patch(path, payload, callback);
	}else{
		this.client.post(path, payload, callback);
	}
};

Nodes.prototype.delete = function(nodeId, callback){
	var path = this.createNodePath(nodeId);
	this.client.del(path, callback);
};

module.exports = Nodes;