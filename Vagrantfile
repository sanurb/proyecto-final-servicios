Vagrant.configure("2") do |config|
  if Vagrant.has_plugin? "vagrant-vbguest"
    config.vbguest.no_install = true
    config.vbguest.auto_update = false
    config.vbguest.no_remote = true
  end

  config.vm.define "servidor_web_1" do |web1|
    web1.vm.box = "santiagocarlosama/servidorWebProyectoFinal"
    web1.vm.box_version = "0.0.1"
    web1.vm.network :private_network, ip: "192.168.50.3"
  end

  config.vm.define "servidor_web_2" do |web2|
    web2.vm.box = "santiagocarlosama/servidorWeb2ProyectoFinal"
    web2.vm.box_version = "0.0.1"
    web2.vm.network :private_network, ip: "192.168.50.2"
  end

  config.vm.define "servidor_bc" do |bc|
    bc.vm.box = "santiagocarlosama/servidorbcProyectoFinal"
    bc.vm.box_version = "0.0.1"
    bc.vm.network :private_network, ip: "192.168.50.4"
  end

end
