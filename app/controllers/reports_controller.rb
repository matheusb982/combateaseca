class ReportsController < CrudController
  def index
    flash[:notice] = "Obrigado por fazer sua denúncia"
    redirect_to root_path
  end

  def permitted_params
    params.permit( report: [ :name, :description, :city ] )
  end
end
