/**
 * 功能说明：数据字典控制层
 */
app.controller('tbDataDictController', function($scope, $controller, tbDataDictService) {
	
	$controller('baseController', {
		$scope : $scope
	});
	
	// 功能说明：根据主键进行查找
	$scope.findOne = function(id) {
		tbDataDictService.findOne(id).success(function(response) {
			$scope.entity = response;
		});
	};
	
	// 功能说明：查找所有对象列表
	$scope.findAll = function() {
		tbDataDictService.findAll().success(function(response) {
			$scope.list = response;
		});
	};
	
	// 功能说明：根据列表进行查找
	$scope.findList = function() {
		tbDataDictService.findList($scope.selectIds).success(function(response) {
			$scope.list = response;
		});
	};
	
	// 功能说明：根据主键进行删除
	$scope.deleteOne = function(id) {
		zeroModal.confirm("您确定要删除吗？", function() {
			tbDataDictService.deleteOne(id).success(function(response) {
				if (response.success) {
					zeroModal.success(response.message);
					$scope.reloadList();
				} else {
					zeroModal.error(response.message);
				}
			});
		});
	};
	
	// 功能说明：删除所有对象列表
	$scope.deleteAll = function() {
		tbDataDictService.deleteAll().success(function(response) {
			if (response.success) {
				zeroModal.success(response.message);
				$scope.reloadList();
			} else {
				zeroModal.error(response.message);
			}
		});
	};
	
	// 功能说明：根据列表进行删除
	$scope.deleteList = function() {
		if ($scope.selectIds.length == 0) {
			zeroModal.alert('请您勾选需要删除的记录！');
			return;
		}
		
		zeroModal.confirm("您确定要删除吗？", function() {
			tbDataDictService.deleteList($scope.selectIds).success(function(response) {
				if (response.success) {
					zeroModal.success(response.message);
					$scope.reloadList();
					
					$scope.selectIds = [];
				} else {
					zeroModal.error(response.message);
				}
			});
		});
	};
	
	// 功能说明：更新对象
	$scope.update = function() {
		tbDataDictService.update($scope.entity).success(function(response) {
			if (response.success) {
				zeroModal.success(response.message);
				$scope.reloadList();
			} else {
				zeroModal.error(response.message);
			}
		});
	};
	
	// 功能说明：添加对象
	$scope.add = function() {
		tbDataDictService.add($scope.entity).success(function(response) {
			if (response.success) {
				zeroModal.success(response.message);
				$scope.reloadList();
			} else {
				zeroModal.error(response.message);
			}
		});
	};
	
	// 功能说明：保存对象
	$scope.save = function() {
		var serviceObject;
		if ($scope.entity.id != null) {
			serviceObject = tbDataDictService.update($scope.entity);
		} else {
			serviceObject = tbDataDictService.add($scope.entity);
		}
		serviceObject.success(function(response) {
			if (response.success) {
				zeroModal.success(response.message);
				$scope.reloadList();
			} else {
				zeroModal.error(response.message);
			}
		});
	};
	
	// 功能说明：分页查询
	$scope.search = function(pageNum, pageSize) {
		tbDataDictService.search(pageNum, pageSize, $scope.searchEntity).success(function(response) {
			$scope.list = response.rows;
			$scope.paginationConf.totalItems = response.total;
		});
	};
	
});
