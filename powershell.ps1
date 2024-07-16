# Variables
$resourceGroupName = "example-resources"
$location = "East US"
$storageAccountName = "examplestorageaccount$(Get-Random)"
$storageSkuName = "Standard_LRS"

# Crear un nuevo grupo de recursos
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Crear una cuenta de almacenamiento
New-AzStorageAccount -Name $storageAccountName `
                     -ResourceGroupName $resourceGroupName `
                     -Location $location `
                     -SkuName $storageSkuName `
                     -Kind "StorageV2" `
                     -EnableHttpsTrafficOnly $true

Write-Host "Cuenta de almacenamiento creada con éxito: $storageAccountName"