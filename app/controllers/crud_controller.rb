class CrudController < InheritedResources::Base
  #before_filter :authenticate_user!, raise: false

  def show
    redirect_to collection_url
  end

  protected

  def collection
    @q = resource_class.ransack(params[:q])
    get_collection_ivar ||= @q.result(distinct: true)
  end
end
