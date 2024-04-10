class Api::CommentsController < ApplicationController
  include ErrorHandler
  before_action :set_feature

  # GET /comments
  def index
    render json: @feature.comments.ordered_by_newest
  end

  # POST /comments
  def create
    ensure_body_present
    @comment = @feature.comments.new(comment_params)

    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  private
  def set_feature
    @feature = Feature.find(params[:feature_id])
  end

  def comment_params
    params.require(:comment).permit(:body).transform_values{|value| value.strip.squish}
  end

  def ensure_body_present
    raise ActionController::ParameterMissing.new(:comment) if params[:comment][:body].blank?
  end
end
